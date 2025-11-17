'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { aiSpeciesRecognition, AiSpeciesRecognitionOutput } from '@/ai/ai-species-recognition';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  image: z.custom<FileList>().refine(files => files?.length > 0, 'An image is required.'),
  additionalDetails: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function SpeciesRecognitionForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AiSpeciesRecognitionOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      additionalDetails: '',
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    const file = values.image[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      try {
        const photoDataUri = reader.result as string;
        const response = await aiSpeciesRecognition({
          photoDataUri,
          additionalDetails: values.additionalDetails,
        });
        setResult(response);
      } catch (e: any) {
        setError(e.message || 'An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    };
    reader.onerror = () => {
      setError('Failed to read the image file.');
      setIsLoading(false);
    };
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Observation Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={e => {
                        field.onChange(e.target.files);
                        handleFileChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             {preview && (
              <div className="relative w-full h-64 mt-4 rounded-md overflow-hidden border">
                <Image src={preview} alt="Image preview" layout="fill" objectFit="cover" />
              </div>
            )}
            <FormField
              control={form.control}
              name="additionalDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Details (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., location, time of day, weather conditions" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Recognize Species'}
            </Button>
          </div>
          <div className="flex items-center justify-center">
            {isLoading && (
              <div className="text-center">
                <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                <p className="mt-2 text-muted-foreground">Analyzing image...</p>
              </div>
            )}
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {result && (
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>AI Recognition Result</CardTitle>
                  <CardDescription>{result.justification}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {result.suggestedSpecies.map((species, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-medium">{species}</p>
                        <p className="text-sm text-muted-foreground">
                          {Math.round(result.confidenceLevels[index] * 100)}% Confidence
                        </p>
                      </div>
                      <Progress value={result.confidenceLevels[index] * 100} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
