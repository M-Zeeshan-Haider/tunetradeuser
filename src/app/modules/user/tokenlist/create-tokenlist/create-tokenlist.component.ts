import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTokenRequest } from 'src/app/shared/models';
import { TokenService } from 'src/app/shared/services/token-service/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-tokenlist',
  templateUrl: './create-tokenlist.component.html',
  styleUrls: ['./create-tokenlist.component.scss']
})
export class CreateTokenlistComponent implements OnInit {
  createTokenForm: FormGroup;
  tokenData: CreateTokenRequest;
  submitted: boolean;
  constructor(private fb: FormBuilder, private tokenService: TokenService, private route:Router) { }

  ngOnInit() {
    this.kycForm();
  }

  
  get f() { return this.createTokenForm.controls; }
  kycForm() {
    this.createTokenForm = this.fb.group(
      {
        name: [null, [Validators.required]],
        symbol: [null, [Validators.required]],
        totalSupply: [null, [Validators.required]],
        decimals: [null, [Validators.required]],
        ethAddress: [null, [Validators.required]],
        author: [null, [Validators.required]],
        website: [null, [Validators.required]],
        soundCloud: [null, [Validators.required]],
        youtube: [null, [Validators.required]],
        category: [null, [Validators.required]],
        description: [null, [Validators.required]]
      }
    );
  }
  submitToken(data) {
    this.submitted = true;
    if (this.createTokenForm.invalid) {
        return;
    }
    else{
    
    this.tokenData = data;
    console.log(this.tokenData)
    this.tokenService.listToken(data).subscribe(
      res => {
        console.log(res);
        this.createTokenForm.reset();
        this.submitted=false;
        this.route.navigateByUrl('user/home/tokenmain');
      }
    );
  }
  }
}
