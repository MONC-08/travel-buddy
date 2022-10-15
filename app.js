let carObject = {
    vehicle: 'Car',
    imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    farePerKilo: 10,
    capacity: 2,
    description: 'Discover very exciting offers and book online to save money with our convenient and hassle free booking.'
};

let bikeObject = {
    vehicle: 'Bike',
    imageUrl: 'https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    farePerKilo: 5,
    capacity: 1,
    description: 'Discover very exciting offers and book online to save money with our convenient and hassle free booking.'
};

let busObject = {
    vehicle: 'Bus',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    farePerKilo: 10,
    capacity: 10,
    description: 'Discover very exciting offers and book online to save money with our convenient and hassle free booking.'
};


function displayServices(service) {
    const mainSection = document.getElementById('main-section');

    // convert to string to pass through onclick function
    const stringifiedObj = JSON.stringify(service);

    const div = document.createElement('div');
    div.innerHTML = `
    
    <div class="card mb-3 mx-auto" style="max-width: 800px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${service.imageUrl}"
                            class="img-fluid rounded-start h-100" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Transport 
                            Mode: ${service.vehicle}</h5>

                            <p class="card-text">Fare per kilo:<small class="text-muted"> ${service.farePerKilo}</small></p>

                            <p id="capacity" class="card-text"><small class="text-muted">Capacity: ${service.capacity}</small></p>
                            <p class="card-text">${service.description}</p>

                            <!-- Button trigger modal -->
                            <button onclick='handleBooking(${stringifiedObj})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                              Launch demo modal
                            </button>

                            
                            
                        </div>
                    </div>
                </div>
                
            </div>
    
    `

    mainSection.appendChild(div);
}

displayServices(carObject);
displayServices(bikeObject);
displayServices(busObject);



//addind modal body

function handleBooking(obj) {
    const modalBody = document.getElementById('modal-body-section');
    // convert to string to pass through onclick function
    const stringifiedObj = JSON.stringify(obj);

    modalBody.innerHTML = `
    
    <div class="card" style="width: 18rem;">
        <img src="${obj.imageUrl}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">Transport 
         Mode: ${obj.vehicle}</h5>

         <p class="card-text">Fare per kilo: <small class="text-muted" id="fare-per-kilo"> ${obj.farePerKilo}</small> <br>Capacity: <small class="text-muted"> ${obj.capacity}</small></p>


         <p class="card-text">Fare:<small id="fare" class="text-muted"> </small></p>
         <p class="card-text">Tax:<small id="tax" class="text-muted"> </small></p>
         <p class="card-text">Cost:<small id="total-cost" class="text-muted"> </small></p>

         

         <p class="card-text">${obj.description}</p>
            
         <div class="d-flex" role="search">
         <input id="distance-input" class="form-control me-2" type="number" placeholder="Distance to travel" aria-label="Search">

         <input id="quantity-input" class="form-control me-2" type="number" placeholder="Quantity of vehicle" aria-label="Search">


         <button onclick='calculateCost(${stringifiedObj})' class="btn bg-primary text-white" type="submit">Submit</button>
         </div>

        </div>
    </div>
    `
}


function calculateCost(obj) {

    const distance = document.getElementById('distance-input').value;
    const quantity = document.getElementById('quantity-input').value;

    //fare calculation
    const farePerKilo = document.getElementById('fare-per-kilo').innerText;

    const fare = distance * farePerKilo * quantity;

    document.getElementById('fare').innerText = fare;

    // console.log(distance, quantity, farePerKilo, fare)

    // tax calculation
    const tax = fare * (10 / 100); // consider 10% vat
    document.getElementById('tax').innerText = tax;

    // total cost calculation
    const cost = fare + tax;
    document.getElementById('total-cost').innerText = cost;
}