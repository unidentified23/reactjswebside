import '../App.css';

function BottomNav () {
  return (
    
        <nav className='navtings'>
          <div className='divCont' >
          <a href='TeacherStatistics' className='Link2'>Teacher statistics</a>
          <br></br>
        <a href='Facilities' className='Link3'>Facilities</a>
        <br></br>
        <a href='OverallPerformance' className='Link4'>overall  Perfomance</a>
        <br></br>
        <a href='MetrixStatistics' className='Link5'>Metrix statistics</a>
        <br></br>
        </div>

        <div className='divcont2'>
        <a href='Rulebook' className='Link6'>Rule book</a>
        <br></br>
        <a href='SchoolStatistics' className='Link7'>School statistic</a>
        <br></br>
        <a href='UniformAndPayment' className='Link8'>Uniform and Payments</a>
        <br></br>
        <a href='Vaccancies' className='Link1' >Vaccancies</a>

          </div>
        
        </nav>
    
  );
}

export default BottomNav;
