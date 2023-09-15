function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <p className="text-center">
        &copy; {currentYear} Filip Haubitch. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
