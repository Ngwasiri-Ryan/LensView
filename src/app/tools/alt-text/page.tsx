import AltTextForm from './alt-text-form';

export default function AltTextPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">AI Alt-Text Suggester</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Enhance accessibility with AI. Upload an image to generate a descriptive alt-text suggestion.
        </p>
      </div>
      <AltTextForm />
    </div>
  );
}
