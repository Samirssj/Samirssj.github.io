 // Scroll suave al hacer clic en los enlaces de navegación
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // Login validation
        const loginForm = document.getElementById('loginForm');
        const loginMessage = document.getElementById('loginMessage');

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === '1234') {
                loginMessage.className = 'login-message success';
                loginMessage.textContent = '✅ Acceso concedido. (Aquí podrías añadir funciones internas si lo deseas)';
                loginForm.reset();
            } else {
                loginMessage.className = 'login-message error';
                loginMessage.textContent = '❌ Usuario o contraseña incorrectos';
            }
            
            loginMessage.style.display = 'block';
        });