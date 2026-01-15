const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} BrandName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
