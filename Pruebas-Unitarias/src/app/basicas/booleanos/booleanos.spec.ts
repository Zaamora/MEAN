import { usuarioIngresado } from './booleanos';



describe('Pruebas de Booleanos', () => {

    it( 'Debe devolver true', () => {

        const res = usuarioIngresado();

        expect( res ).toBeTruthy();

    });


});
