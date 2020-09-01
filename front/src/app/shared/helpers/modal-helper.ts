import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../components/modal/modal.component';


export class ModalHelper {
  private modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) {
  }

  openModal(formData, form) {
    console.log(form);
    const initialState = {
      formData: formData ? formData : null,
      title: formData ? 'Edytuj' : 'Dodaj',
      closeBtnName: 'Zapisz',
      formName: form
    };

    this.modalRef = this.modalService.show(ModalComponent, { initialState });
  }
}
