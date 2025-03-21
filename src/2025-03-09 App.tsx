import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

function App() {
  // const [mutations, setMutations] = useState<
  //   Array<Schema["StockMutation"]["type"]>
  // >([]);
  const { user, signOut } = useAuthenticator(); //  const { signOut } = useAuthenticator();

  // useEffect(() => {
  //   client.models.StockMutation.observeQuery().subscribe({
  //     next: (data) => setMutations([...data.items]),
  //   });
  // }, []);

  function createMutation() {
    const quantityInput = document.querySelector(
      'input[name="quantity"]'
    ) as HTMLInputElement;
    const quantity = parseFloat(quantityInput.value);

    if (isNaN(quantity)) {
      alert("Please enter a valid number for quantity.");
      return;
    }

    client.models.StockMutation.create({
      locationId: "location",
      date: "date",
      shiftId: "shift",
      mutationTypeId: "mutationType",
      productId: "product",
      unitId: "unit",
      quantity: quantity,
      corrections: false,
      userProfileId: user?.signInDetails?.loginId || "",
    });
  }

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}'s mutations</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createMutation();
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <label>Location:</label>
              </td>
              <td>
                <input type="text" name="location" required />
              </td>
            </tr>
            <tr>
              <td>
                <label>Date:</label>
              </td>
              <td>
                <input type="date" name="date" required />
              </td>
            </tr>
            <tr>
              <td>
                <label>Shift:</label>
              </td>
              <td>
                <input type="text" name="shift" required />
              </td>
            </tr>
            <tr>
              <td>
                <label>Type:</label>
              </td>
              <td>
                <input type="text" name="type" required />
              </td>
            </tr>
            <tr>
              <td>
                <label>Corrections:</label>
              </td>
              <td>
                <input type="checkbox" name="corrections" />
              </td>
            </tr>
            <tr>
              <td>
                <label>User ID:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="userId"
                  value={user?.signInDetails?.loginId || ""}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <button onClick={createMutation}>submit</button>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
