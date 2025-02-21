import LoanCalculator from "@/app/components/LoanCalculator";

interface ContentProps {
  section: string;
}

const Content = ({ section }: ContentProps) => {
  return (
    <section>
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
