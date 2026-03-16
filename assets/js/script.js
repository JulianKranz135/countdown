        let targets = {
            'pause': new Date("Mar 17, 2026 09:15:00").getTime(),
            'school': new Date("Mar 17, 2026 14:45:00").getTime(), 
            'vacation': new Date("Mar 27, 2026 12:50:00").getTime() 
        };

        setInterval(function() {
            const now = new Date().getTime();

            calculateTime('pause', now);
            calculateTime('school', now);
            calculateTime('vacation', now);

        }, 1000);

        function calculateTime(id, now) {
            const distance = targets[id] - now;
            const container = document.getElementById('cd-' + id);

            if (distance < 0) {
                container.innerHTML = "<h2>JETZT!</h2>";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            container.querySelector('.day').innerText = days;
            container.querySelector('.hour').innerText = formatTime(hours);
            container.querySelector('.min').innerText = formatTime(minutes);
            container.querySelector('.sec').innerText = formatTime(seconds);
        }

        function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        }

        function updateTarget(id) {
            const input = document.getElementById('input-' + id).value;
            
            if (input) {
                targets[id] = new Date(input).getTime();
                
                const container = document.getElementById('cd-' + id);
                if (container.querySelector('h2')) {
                    location.reload(); 
                }
            } else {
                alert("Bitte wähle zuerst ein Datum und eine Uhrzeit aus!");
            }
        }
