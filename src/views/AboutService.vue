
<template>
 
  <div>
    
      <div class="black-bg" v-if="modalson==true">
        
        <div class="py-3 text-center">
           <img src="img/brand/use.png" style="width:650px; height:650px;"/>
           <div class="pb-6">
           <base-button type="white mt--4" @click="modalson = false">Close</base-button>
           </div>
        </div>
        
      </div>





    <div>
        <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-6">
        
            <div class="col-lg-5 col-md-6">
              <h1 class="text-white">Smart Food Waste Bin</h1>
              
            </div>
        </base-header>
    </div>

    <div class="pb-5 pb-1 pt-5 pt-md-10">
        <div class="header-body mb-10">
            
        <div class="col-md-7">
              <h2 class="text-default">About our Service</h2>
                <h4>
                    음식물 쓰레기의 적재량과 쓰레기통 내부 온도에 대한 데이터를 기반으로 자동 탈취 서비스 수행
                </h4>
              <hr>
        </div>
        <img src="img/brand/infographic.png" style="width:1216px; height:684px;"/>
        </div>

       <div class="text-center my-3">
        <base-button type="primary"  @click="modalson = true">
        Bin 사용방법
        </base-button>
       </div>
  
    </div>
    
  

  </div>
</template>




<script>



  export default {
    name: "AboutService",
      data() {
        return {
          modalson:false,

          modals:{
          modal2: false
        },

    
        };
      
      
      }
    

  };

</script>

<style>


.black-bg{
  
  width: 700px; height:700px; 
  background: white;
  position: fixed;
  left : 500px;
  top : 15px;
  z-index: 100;
}


</style>
