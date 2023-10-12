const reportWebVitals = async(onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
  try{
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
  catch(error){
    console.log('Error importing web-vitals:', error)
  }
  }
};

export default reportWebVitals;
