import LoanCalculator from "@/app/components/LoanCalculator";

const Content = () => {
  return (
    <section className="p-4 sm:ml-64">
      {/* TODO - Show / Hide Sections depending on the selection in the sidebar */}
      <LoanCalculator />
    </section>
  );
};

export default Content;
