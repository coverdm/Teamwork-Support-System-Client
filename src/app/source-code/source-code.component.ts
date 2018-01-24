import { Component, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';
import { toast, MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RepositoryParserService } from '@services/repository-parser.service';

@Component({
  selector: 'app-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss'],
  providers: [ RepositoryParserService ]
})
export class SourceCodeComponent implements OnInit{

  newRepositoryForm: FormGroup;
  modalActions = new EventEmitter<string | MaterializeAction>();
  identifyResult = {canonicalName: '', fullName: '', imgLink: ''};

  sourceCodeList = [
    {
      link : 'https://github.com/coverdm/TeamWorkSupportSystem.git'
    },
    {
      link : 'https://gitlab.com/coverdm/TeamWorkSupportSystem.git'
    },
    {
      link: 'https://bitbucked.com/coverdm/TeamWorkSupportSystem.git',
    }
  ];

  public constructor(private formBuilder: FormBuilder, private repositoryParserService: RepositoryParserService) {
  }

  public ngOnInit() {

    this.newRepositoryForm = this.formBuilder.group({
      newLinkHolder : ['', Validators.required]
    });

    this.onChanges();
  }

  onChanges() {
    this.newRepositoryForm.valueChanges.subscribe(val => this.identifyResult = this.performIdentifyRepository(val.newLinkHolder));
  }

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

  public performIdentifyRepository(link) {
    return this.repositoryParserService.identify(link);
  }

  saveNewRepositoryLink(value) {
    this.sourceCodeList.push({link: value.newLinkHolder});
  }

}
