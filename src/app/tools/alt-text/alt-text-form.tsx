'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useState, useRef } from 'react';
import { generateAltText } from './actions';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { UploadCloud, Copy, Check, AlertCircle, Sparkles, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Alt-Text
        </>
      )}
    </Button>
  );
}

export default function AltTextForm() {
  const initialState = { message: null, altText: null, errors: {} };
  const [state, dispatch] = useFormState(generateAltText, initialState);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state.message && state.message !== 'Success!') {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      })
    }
  }, [state, toast]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleCopy = () => {
    if (state.altText) {
      navigator.clipboard.writeText(state.altText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      toast({
        title: "Copied!",
        description: "Alt-text copied to clipboard.",
      })
    }
  };

  const resetForm = () => {
    setImagePreview(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
    // A little trick to reset form state
    dispatch({ message: null, altText: null, errors: {} } as any);
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form action={dispatch} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="image" className="font-medium">Upload Image</label>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-secondary hover:bg-muted transition-colors">
                    {imagePreview ? (
                        <div className="relative w-full h-full">
                            <Image src={imagePreview} alt="Image preview" layout="fill" objectFit="contain" className="rounded-lg" />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-muted-foreground">PNG, JPG, GIF (MAX. 4MB)</p>
                        </div>
                    )}
                    <Input id="image-upload" name="image" type="file" className="hidden" accept="image/*" onChange={handleFileChange} ref={fileInputRef}/>
                </label>
            </div>
             {state.errors?.image && <p className="text-sm font-medium text-destructive">{state.errors.image[0]}</p>}
          </div>

          <SubmitButton />

          {state.altText && (
            <div className="space-y-4 pt-4 border-t">
                 <h3 className="text-lg font-semibold font-headline">Suggested Alt-Text</h3>
                <div className="relative">
                    <Textarea value={state.altText} readOnly rows={4} className="pr-12" />
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={handleCopy}
                        aria-label="Copy alt text"
                    >
                        {isCopied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                    </Button>
                </div>
                 <Button type="button" variant="outline" onClick={resetForm} className="w-full">
                    Try Another Image
                </Button>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
