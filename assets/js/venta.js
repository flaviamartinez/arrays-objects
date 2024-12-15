const propertiesVenta = [
	{
		nombre: 'Apartamento de lujo en zona exclusiva',
		src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
		descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
		ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
		habitaciones: 4,
		bano: 4,
		costo: '5.000',
		smoke: false,
		pets: false

	},
	{
		nombre: 'Apartamento acogedor en la montaña',
		src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
		descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
		ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
		habitaciones: 2,
		bano: 1,
		costo: '1.200',
		smoke: true,
		pets: true

	},
	{
		nombre: 'Penthouse de lujo con terraza panorámica',
		src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
		descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
		ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
		habitaciones: 3,
		bano: 3,
		costo: '4.500',
		smoke: false,
		pets: true

	},
	{
		nombre: 'Estudio moderno en el centro de la ciudad',
		src: 'assets/img/studio.jpg',
		descripcion: 'Un estudio recientemente renovado, perfecto para una sola persona o pareja, cerca de restaurantes y transporte público.',
		ubicacion: 'Calle Principal 789, Centro, MX 11223',
		habitaciones: 1,
		bano: 2,
		costo: '800',
		smoke: false,
		pets: false

	}
]

// Propiedades Venta
const containerSale = document.getElementById('properties-sale');
let containerContent = ""

for (const property of propertiesVenta) {
	let smoke = ""
	if (property.smoke) {
		smoke = `<span style="color:green"><i class='fas fa-smoking'></i> Permitido fumar</span>`
	} else {
		smoke = `<span style="color:red"><i class='fas fa-smoking-ban'></i> No se permite fumar</span>`
	}

	let pets = ""
	if (property.pets) {
		pets = `<span style="color:green"><i class='fas fa-paw'></i> Mascotas permitidas</span>`
	} else {
		pets = `<span style="color:red"><i class='fa-solid fa-ban'></i> No se permiten mascotas</span>`
	}

	containerContent += `<div class="card">
			<div class = "card-img">
				<img
				src=${property.src}
				class="card-img-top"
				alt="Imagen del departamento"
				/>
			</div>
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
                <p class="text-danger" id="smoke-sign">
                  ${smoke}
                </p>
                <p class="text-danger" id="pets-sign">
                  ${pets}
                </p>
			  </div>
			</div>`
}

containerSale.innerHTML = containerContent