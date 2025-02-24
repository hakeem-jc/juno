import LoanCalculator from "@/app/components/LoanCalculator";
import Overview from "@/app/components/Overview";

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
          <h1 className="text-3xl font-semibold text-white">{section}</h1>
        </nav>

        {/* Render the appropriate section based on the section state */}
        {section === "Overview" && <Overview />}
        {section === "Loan Calculator" && <LoanCalculator />}
      </section>
    </section>
  );
};

export default Content;
