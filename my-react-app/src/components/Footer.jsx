export default function Footer() {
  return (
    <footer className="mt-12 border-t py-6 bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-4xl mx-auto text-sm text-center">
        © {new Date().getFullYear()} Imani Kiplagat. PLP. All rights reserved.
      </div>
    </footer>
  );
}
