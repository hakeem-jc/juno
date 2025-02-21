import LoanCalculator from "@/app/components/LoanCalculator";

interface ContentProps {
  section: string;
  isOpen: boolean;
}

const Content = ({ section, isOpen }: ContentProps) => {
  return (
    <section>
      {/* Overlay */}
      <div className={isOpen ? "absolute inset-0 bg-black bg-opacity-80 h-full z-10": ''}></div>

      {/* Content */}
      <section className="p-4 sm:ml-64">
        <nav className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold text-white">{section}</h1>
        </nav>

        {section === "Loan Calculator" && <LoanCalculator />}
      </section>
    </section>
  );
};

export default Content;
