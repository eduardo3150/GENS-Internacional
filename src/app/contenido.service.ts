import { Injectable } from '@angular/core';
import { Contenido } from './contenido';
import { CONTENIDOS } from './mock-contenido';

@Injectable()
export class ContenidoService {
    getContenido(): Promise<Contenido[]> {
        return Promise.resolve(CONTENIDOS);
    }

    getContenidoSlowly(): Promise<Contenido[]>{
        return new Promise(resolve => {
            setTimeout(()=> resolve(this.getContenido()),2000);
    });
    }
}
