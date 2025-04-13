function showToast(message, bgColor = '#333', icon = '') {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.style.backgroundColor = bgColor;
    toast.innerHTML = `<span>${icon}</span> ${message}`;
    document.body.appendChild(toast);
  
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-20px)';
    }, 2000);
  
    setTimeout(() => {
      toast.remove();
    }, 2600);
  }
  