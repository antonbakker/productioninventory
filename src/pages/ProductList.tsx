// ProductList.tsx
import {
  Card,
  Flex,
  Heading,
  SearchField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
const client = generateClient<Schema>({
  authMode: "userPool",
});

export function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>(
    []
  );

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await client.models.Product.list({
        limit: 100,
        filter: {
          name: {
            contains: searchQuery,
          },
        },
      });
      setProducts(data);
    };

    loadProducts();
  }, [searchQuery]);

  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading level={2}>Producten</Heading>
          <Link to={"/product/create"}>Create New</Link>
        </Flex>

        <SearchField
          hasSearchButton={false}
          hasSearchIcon={true}
          label="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Table highlightOnHover={true} variation="striped">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Dichtheid</TableCell>
              <TableCell>OMS4Business product_id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.density}</TableCell>
                <TableCell>{product.omsProductId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Flex>
    </Card>
  );
}
