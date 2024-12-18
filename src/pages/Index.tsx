import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            Welcome to Your App
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start building something amazing with our modern React template featuring a beautiful header and footer design.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;