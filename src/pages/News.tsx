import { Helmet } from "react-helmet-async";
import PageHeader from "@/components/ui/PageHeader";

export default function NewsPage() {
  return (
    <>
      <Helmet>
        <title>News — McMaster iGEM</title>
        <meta name="description" content="Monthly newsletter and updates from McMaster iGEM." />
      </Helmet>
      <PageHeader
        eyebrow="News"
        title="Monthly Newsletter"
        lede="Coming Soon! Stay tuned to learn more about the McMaster iGEM team and any updates on our latest projects."
      />
    </>
  );
}
