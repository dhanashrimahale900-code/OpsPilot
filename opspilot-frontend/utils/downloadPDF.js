import jsPDF from "jspdf";

export function downloadPDF(report) {
  const doc = new jsPDF();

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  const lines = doc.splitTextToSize(report || "No Report", 180);

  doc.text(lines, 10, 20);

  doc.save("OpsPilot_Report.pdf");
}