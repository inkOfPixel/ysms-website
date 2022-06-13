import styled from "styled-components";
import data from "./data.json";

function Table() {
  return (
    <Container>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Price ($)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((country) => {
          return (
            <tr key={country.code}>
              <td>{country.code}</td>
              <td>{country.name}</td>
              <td>${country.price.toFixed(3)}</td>
            </tr>
          );
        })}
      </tbody>
    </Container>
  );
}

const Container = styled.table`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 60px;
  th {
    text-align: left;
  }
  tr {
    &:last-child {
      td {
        border-bottom: none;
      }
    }
  }
  td {
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  th {
    padding: 20px 20px 15px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default styled(Table)``;
