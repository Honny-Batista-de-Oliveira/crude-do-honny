		
		
		function insert(){			
			
			const insertElement = document.createElement("li");
			const insertingData  = document.getElementById('insertData').value;
			const nodeElement = document.createTextNode(insertingData);
				insertElement.appendChild(nodeElement);
			const element = document.getElementById("div1");
				element.appendChild(insertElement);
				element.style.display='block';
				
				
			
			
			
			
		}
		function replace(){
			const insertElement = document.createElement("li");
			let newName = prompt('INSIRA O NOVO NOME.:')
			const nodeElement = document.createTextNode(newName);
				insertElement.appendChild(nodeElement);
			let position = parseInt(prompt('INSIRA A POSIÇÃO.:'))
			const parent = document.getElementById("div1");
			const child = document.getElementsByTagName("li")[position];
				parent.replaceChild(insertElement, child);
		} 
		
		function deleting(){
			
			for(let i = 0; i < 200 ; i++){
			const delTarget = document.getElementsByTagName("li")[i];
			delTarget.addEventListener("click", function(){
				delTarget.remove();				
			});
			}
			
		}
		function colorApointment(){
			for(let i = 0; i < 200; i++){
			const delTarget = document.getElementsByTagName("li")[i];
			delTarget.addEventListener("click", function(){
				delTarget.style.backgroundColor  = 'gray';
			});
			}
		}
		
		function before(){
			const para = document.createElement("li");
			let newName = prompt('INSIRA O NOVO NOME.:')
			const nodeElement = document.createTextNode(newName);
			para.appendChild(nodeElement);

			const element = document.getElementById("div1");
			const child = document.getElementsByTagName("li")[0];
			element.insertBefore(para, child);
		}
		
			
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		