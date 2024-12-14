const propertiesAlquiler = [
	{
		nombre: 'Apartamento en el centro de la ciudad',
		src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
		descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
		ubicacion: '123 Main Street, Anytown, CA 91234',
		habitaciones: 2,
		bano: 2,
		costo: '2.000',
		smoke: false,
		pets: true

	},
	{
		nombre: 'Apartamento luminoso con vista al mar',
		src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
		descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
		ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
		habitaciones: 3,
		bano: 3,
		costo: '2.500',
		smoke: true,
		pets: true

	},
	{
		nombre: 'Condominio moderno en zona residencial',
		src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
		descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
		ubicacion: '123 Main Street, Anytown, CA 91234',
		habitaciones: 2,
		bano: 2,
		costo: '2.200',
		smoke: false,
		pets: false

	},
	{
		nombre: 'Casa luminosa con jardín en zona tranquila',
		src: 'assets/img/house-garden.jpg',
		descripcion: 'Una casa espaciosa, llena de luz natural, con un amplio jardín ideal para reuniones y tiempo al aire libre.',
		ubicacion: 'Avenida Del Parque 32, Colonia Las Flores, MX 22045',
		habitaciones: 4,
		bano: 3,
		costo: '1.300',
		smoke: false,
		pets: true

	}
]

// Propiedades Alquiler
const containerRent = document.getElementById('properties-rent');
let containerContent = ""

for (const property of propertiesAlquiler) {
	let smoke = ""
	if (property.smoke) {
		smoke = "<i class='fas fa-smoking'></i> Permitido fumar"
	} else {
		smoke = "<i class='fas fa-smoking-ban'></i> No se permite fumar"
	}

	let pets = ""
	if (property.pets) {
		pets = "<i class='fas fa-paw'></i> Mascotas permitidas"
	} else {
		pets = "<i class='fa-solid fa-ban'></i> No se permiten mascotas"
	}

	containerContent += `<div class="card">
              <img
                src=${property.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${property.nombre}
                </h5>
                <p class="card-text">
                  ${property.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${property.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${property.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${property.bano} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${property.costo}</p>
                <p class="text-danger">
                  ${smoke}
                </p>
                <p class="text-danger">
                  ${pets}
                </p>
			  </div>
			</div>`
}

containerRent.innerHTML = containerContent