// export function getData() {
//     return fetch('/data.json')
//         .then(response => response.json())
//         .then(data => data)
//         .catch(error => console.log('Error fetching data: ', error));
// }

// export function getData() {
//     return fetch('/data.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then(data => data)
//       .catch(error => console.log('Error fetching data: ', error));
//   }

interface News {
    id: number;
    year: number;
    description: string;
}

export interface IData {
    id: number;
    year_before: number;
    year_after: number;
    news: News[];
}
export interface Data {
    data: IData;
}

export const getData = async (): Promise<IData[]> => {
    const response = await fetch('./data.json');
    const data = await response.json();
    return data;
};