import ProductList from '@/components/product-list';
import { TypographyH3 } from '@/components/typos/h3';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getPopularProducts } from '@/features/product/getPopularProducts';

type Props = {};

async function FeaturedProducts({}: Props) {
  const { data, error } = await getPopularProducts();

  //   if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <section className="w-full">
      <div className="flex items-center justify-center mb-2">
        <TypographyH3>Featured Books</TypographyH3>
      </div>
      <Tabs
        defaultValue="recommended"
        className="w-full flex flex-col justify-center items-center"
      >
        <TabsList className="grid w-1/2 grid-cols-2">
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
        </TabsList>
        <TabsContent value="recommended">
          <ProductList products={data?.getPopularProducts} />
        </TabsContent>
        <TabsContent value="popular">
          <ProductList products={data?.getPopularProducts} />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default FeaturedProducts;
