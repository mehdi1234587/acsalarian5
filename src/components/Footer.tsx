const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold text-foreground">
          آکادمی مهدی سالاریان
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          تمامی حقوق محفوظ است © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
