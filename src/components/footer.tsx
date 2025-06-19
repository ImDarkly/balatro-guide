const version = process.env.NEXT_PUBLIC_APP_VERSION;
const isDevelopment = process.env.NODE_ENV === "development";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center gap-2 p-2">
      <p className="text-muted text-sm text-center">
        {`v${version}${isDevelopment ? ".dev" : ""}`}
      </p>
    </footer>
  );
};

export default Footer;
