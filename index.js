const formIteraciones = document.getElementById('formIteraciones')

formIteraciones.addEventListener('submit', (event) => {
   event.preventDefault()
   let numIteraciones = parseInt(event.target.elements.numIteraciones.value);
   let keys = Array(numIteraciones).keys()
   let iteraciones = Array.from(keys);
   let total = 0;
   const times = []
   
   // Iteraciones normales
   times['for'] = 0
   times['while'] = 0
   times['forOf'] = 0
   
   // Arrays Functions
   times['forEach'] = 0
   times['map'] = 0
   // times['reduce'] = 0
   
   // For
   console.log(`=== Iteración FOR ===`);
   let start = performance.now()
   for (let index = 0; index < iteraciones.length; index++) {
      total = operacion(total, iteraciones[index]);
   }
   let end = performance.now()
   times['for'] = end - start;
   document.getElementById('labelFor').innerHTML = times['for']
   console.log(`Tomo ${times['for']} ms en ejecutarse la iteración FOR`);
   let interacionMenor = 'for'
   
   // While
   console.log(`=== Iteración WHILE ===`);
   start = performance.now()
   let index = 0;
   while (index < iteraciones.length) {
      total = operacion(total, iteraciones[index]);
      index++;
   }
   end = performance.now()
   times['while'] = end - start;
   document.getElementById('labelWhile').innerHTML = times['while']
   console.log(`Tomo ${times['for']} ms en ejecutarse la iteración WHILE`);
   interacionMenor = times['while'] < times[interacionMenor] ? 'while' : interacionMenor

   // For Of
   console.log(`=== Iteración FOR...OF ===`);
   start = performance.now()
   for (const iteracion of iteraciones) {
      total = operacion(total, iteracion);
   }
   end = performance.now()
   times['forOf'] = end - start;
   document.getElementById('labelForOf').innerHTML = times['forOf']
   console.log(`Tomo ${times['forOf']} ms en ejecutarse la iteración FOR..OF`);
   interacionMenor = times['forOf'] < times[interacionMenor] ? 'forOf' : interacionMenor

   // For each
   console.log(`=== Iteración FOR EACH ===`);
   start = performance.now()
   iteraciones.forEach((iteracion) => total = operacion(total, iteracion))
   end = performance.now()
   times['forEach'] = end - start;
   document.getElementById('labelForEach').innerHTML = times['forEach']
   console.log(`Tomo ${times['forEach']} ms en ejecutarse la iteración FOR EACH`);
   interacionMenor = times['forEach'] < times[interacionMenor] ? 'forEach' : interacionMenor

   // Map
   console.log(`=== Iteración MAP ===`);
   start = performance.now()
   const newIteraciones = iteraciones.map((iteracion) => total = operacion(total, iteracion))
   end = performance.now()
   times['map'] = end - start;
   document.getElementById('labelMap').innerHTML = times['map']
   console.log(`Tomo ${times['map']} ms en ejecutarse la iteración MAP`);
   interacionMenor = times['map'] < times[interacionMenor] ? 'map' : interacionMenor

   // Ordenando 
   console.log(`La iteración menor fue ${interacionMenor}`);
})

function operacion(valorOrignal, nuevoValor) {
   valorOrignal += nuevoValor
   return valorOrignal
}
