
type User = {
  name: {
    first: string;
    last: string;
  }
 
};



type MakeupIO = {
  
  results: Array<MakeupList>;
};

type MakeupList = {
  id: number;
  brand : string;
  name: string;
  product_type: string;
  price: string;
 
};

export { User, MakeupList, MakeupIO };
