document.addEventListener("DOMContentLoaded", () => {
    // Menampilkan info kelompok di console browser sebagai identitas
    console.log("DevOps Team: Haji, David, Hamid");
  
    const pipelineSteps = document.querySelectorAll('.pipe-step');
    
    // Memulai dari index 2 (Tahap 'Test') karena 'Code' dan 'Build' sudah 'passed' di HTML
    let currentIndex = 2; 
  
    function processPipeline() {
      if (currentIndex >= pipelineSteps.length) {
        // Jika semua tahap selesai, update status di Navigasi Atas
        const navStatus = document.querySelector('.nav-status');
        if (navStatus) {
          navStatus.innerHTML = '<div class="status-dot"></div> Pipeline success';
        }
        return;
      }
  
      const currentStep = pipelineSteps[currentIndex];
      const currentStatus = currentStep.querySelector('.pipe-status');
      const currentLabel = currentStep.querySelector('.ps-label');
  
      // Simulasi proses berjalan selama 2 detik per tahap
      setTimeout(() => {
        // Ubah status tahap yang sedang berjalan menjadi 'passed'
        currentStatus.classList.remove('s-run');
        currentStatus.classList.add('s-pass');
        currentLabel.textContent = 'passed';
  
        currentIndex++;
  
        // Jika masih ada tahap berikutnya, ubah dari 'waiting' ke 'running'
        if (currentIndex < pipelineSteps.length) {
          const nextStep = pipelineSteps[currentIndex];
          const nextStatus = nextStep.querySelector('.pipe-status');
          const nextLabel = nextStep.querySelector('.ps-label');
  
          nextStatus.classList.remove('s-wait');
          nextStatus.classList.add('s-run');
          nextLabel.textContent = 'running';
  
          // Lanjutkan ke tahap selanjutnya
          processPipeline();
        } else {
           // Trigger penyelesaian pipeline
           processPipeline(); 
        }
      }, 2000); // 2000 milidetik = 2 detik
    }
  
    // Berikan jeda 1.5 detik sebelum simulasi dimulai
    setTimeout(processPipeline, 1500);
  });