import LoanCalculator from "@/app/components/LoanCalculator";

interface ContentProps {  
  section: string;
}

const Content = ({ section }: ContentProps ) => {
  return (
    <section className="p-4 sm:ml-64">
      {section === 'Loan Calculator' && <LoanCalculator />}
    </section>
  );
};

export default Content;
