import { Injectable } from '@angular/core';

@Injectable()
export class ErrorMsgService {

  /**
   *
   * @param {string} validatorName
   * @param {any} value
   * @returns {string}
   */
  getValidatorErrorMessage(validatorName: string, value?: any) {
    /*, validatorValue?: any*/

    let messages = {
      'required': 'To pole jest wymagane.',
      'maxlength': 'Przekroczono dopuszczalną ilość znaków.',
      'lettersOnly': 'Wstaw tylko litery.',
      'notNull': 'Wpisana wartość musi być większa od zera.',
      'pattern': 'Niewłaściwy format danych.',
      'transactionMaxValue': 'Przekroczono wartość maksymalną transakcji.',
      'validatePesel': 'Niewłaściwy numer PESEL.',
      'postalCode': 'Niepoprawny format kodu pocztowego',
      'phoneValidator': 'Niepoprawny numer telefonu',
      'email': 'Wprowadź poprawny adres e-mail.',
      'nip': 'Niepoprawny format NIPu',
      'dateFormat': 'Niepoprawny format daty',
      'dateTooLate': 'Data musi być wcześniejsza',

      'min': 'Minimalna wartość zlecenia wynosi: ' + (value !== null ? value : ''),
      'max': 'Maksymalna wartość zlecenia wynosi: ' + (value !== null ? value : ''),
      'personName': 'Wprowadź prawidłowe imię',
      'personSurname': 'Wprowadź prawidłowe nazwisko',
      'birthPlace': 'Wprowadź prawidłowe miejsce urodzenia',
      'documentIdNumber': 'Wprowadź prawidłowy numer dowodu',
      'street': 'Wprowadź prawidłową ulicę',
      'streetNo': 'Wprowadź prawidłowy numer domu',
      'localNo': 'Wprowadź prawidłowy numer lokalu',
      'city': 'Wprowadź prawidłową nazwę miasta',
      'minMaxFloatValidator': 'Wartość spoza dozwolonego zakresu',

      'personDocumentAfterToday': 'Data wystawienia dokumentu nie może być późniejsza niż dzisiejsza',
      'personDocumentIndefinitely': 'Dowód osobisty ważny bezterminowo może być tylko dla osób mających ukończone 65 lat, a data wystawienia dowodu osobistego jest sprzed 2015-03-01.',
      'personDocumentIssuedBeforeBirthDate': 'Data wystawienia dokumentu nie może być wcześniejsza niż data urodzenia.',
      'personDocumentIdValidDate': 'Różnica między datą ważności a datą wystawienia dowodu osobistego musi wynosić 10 lat',
      'personMustBeAdult': 'Uczestnik musi być pełnoletni',
      'makerMustBeAdult': 'Zleceniodawca musi być osobą pełnoletnią',
      'makerLawAbility': 'Zleceniodawca musi posiadać pełną zdolność do czynności prawnych',
      'personLawAbility': 'Uczestnik musi posiadać pełną zdolność do czynności prawnych',
      'residencePolandAddress': 'Osoby niebędące rezydentami Polski do celów podatkowych nie mogą mieć zdefiniowanego adresu stałego w Polsce.',

      'minvaluePdid': 'Minimalna wartość zlecenia wynosi ',
      'minvalue': 'Minimalna wartość wynosi ',
      'registerValuation': 'Wprowadzona kwota jest większa niż wartość rejestru według ostatniej wyceny ',
      'insufficientNrOfUnits': 'Niewystarczająca ilość jednostek na rejestrze do wykonania zlecenia ',

      'percentRange': 'Podaj wartość z przedziału 0 - 100 '
    };

    return messages[validatorName];
  }
}
