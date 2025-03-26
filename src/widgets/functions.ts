function getInitials(firstName:string, lastName:string) {
    if (!firstName && !lastName) return '';
  
    const firstInitial:string = firstName?.charAt(0).toUpperCase() || '';
    const lastInitial:string = lastName?.charAt(0).toUpperCase() || '';
  
    return `${firstInitial}${lastInitial}`;
  }
  export {getInitials}
  