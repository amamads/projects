export type Status = 'In Progress' | 'Complete' | 'Pending'|'Approved'|'Rejected';
export type Order =  {
      orderId:string,
      user:string,
      project:string,
      address:string,
      date:string,
      status:Status,
      image:string
    };