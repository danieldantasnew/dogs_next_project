import styles from "./conta.module.css";
import ContaComponent from "@/components/conta/component";

export default async function ContaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${styles.main} flex-row`}>
      <section className={`${styles.container} content-space flex-column`}>
        <ContaComponent />
        {children}
      </section>
    </main>
  );
}
