import { obtenerRobots } from './arreglos';




xdescribe( 'Pruebas de arreglos', () => {

    it( 'Debe de retornar al menos 3 robots', () => {

        const res = obtenerRobots();
        expect( res.length ).toBeGreaterThanOrEqual(3);

    });

    xit( 'Debe de existir Hulk y Logan', () => {

        const res = obtenerRobots();
        expect( res ).toContain('Hulk');
        expect( res ).toContain('Logan');

    });


});
