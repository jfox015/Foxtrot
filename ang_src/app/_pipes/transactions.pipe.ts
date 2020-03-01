import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'transactionType'})
export class TransactionTypePipe implements PipeTransform {
  transform(type: string): string {
    
  	if (type === "send") return "navigate-outline";
    else if (type === "receive") return "filing-outline";
    else if (type === "exchngeOut") return "upload-outline";
    else if (type === "exchngeIn") return "download-outline";
    else return "help-outline";
  }
}

@Pipe({name: 'transactionStatus'})
export class TransactionStatusPipe implements PipeTransform {
  transform(type: string): string {
    
  	if (type === "pending") return "Pending";
    else if (type === "complete") return "Complete";
    else if (type === "rejected") return "Rejected";
    else return "Unknown";
  }
}