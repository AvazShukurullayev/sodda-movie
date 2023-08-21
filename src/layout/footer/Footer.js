import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-light bg-warning p-4 mt-4">
      <div className="container">
        <h4 className="text-center">
          &copy; CopyRight Reserved {new Date().getFullYear()}
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
