
<template>
  <div>
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
              <h2 class="text-default">Amount(ml)</h2>
                <h4>
                    쓰레기의 무게가 이 설정값을 넘을 시 탈취 빈도가 자동으로 변경됩니다.
                </h4>
              <hr>
        </div>

        <div class="col-md-7">
              <h2 class="text-default">Temperature(°C)</h2>
              <h4>
                    쓰레기통 내부 온도가 이 설정값을 넘을 시 탈취 빈도가 자동으로 변경됩니다.
                </h4>
              <hr>
        </div>

        <div class="col-md-7">
              <h2 class="text-default">Term(분)</h2>
              <h4>
                    탈취제를 뿌리는 주기입니다.
                </h4>
              <hr>
        </div>
          
        </div>
    </div>

    

    <div class="row">
        <div class="col-xl-3"></div>
        <div class="col-md-3">
            <base-input formClasses="input-group-alternative" placeholder="Input Amount" v-model="model.Amount"></base-input>
        </div>
        <div class="col-md-3">
            <base-input formClasses="input-group-alternative" placeholder="Current Amount" v-model="model2.CurAmount" readonly></base-input>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-3"></div>
        <div class="col-md-3">
            <base-input formClasses="input-group-alternative" placeholder="Input Temperature" v-model="model.Temperature"></base-input>
        </div>
        <div class="col-md-3">
            <base-input formClasses="input-group-alternative" placeholder="Current Temperature" v-model="model2.CurTemp" readonly></base-input>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-3"></div>
        <div class="col-md-3">
            <base-input formClasses="input-group-alternative" placeholder="Input Term" v-model="model.Term"></base-input>
        </div>
        <div class="col-md-3">
            <base-input formClasses="input-group-alternative" placeholder="Current Term" v-model="model2.CurTerm" readonly></base-input>
        </div>
    </div>
    
    <div class="text-center my-3">
        <base-button type="primary" @click="modals.modal1 = true">
        Change
      </base-button>
    </div>
  
    <modal v-model:show="modals.modal1">
          <template v-slot:header>
            <h5 class="modal-title" id="modal-title-default">Settings</h5>
          </template>

          <p>설정 값이 비정상적이라고 판단될 시 기존 값이 유지됩니다.</p>
          <p>이 값으로 설정을 완료하시겠습니까?</p>

          <template v-slot:footer>
              <base-button type="primary" @click="getData">Save changes</base-button>
              <base-button id='close_btn' type="secondary" class="ml-auto" @click="modals.modal1 = false">Close
              </base-button>
          </template>
      </modal>
    
  </div>
</template>




<script>
import axios from 'axios';
export default {
    name: "Settings",
    data() {
      return {
        model: {
          Amount: "",
          Temperature: "",
          Term: "",
        },

        model2: {
          CurAmount: '',
          CurTemp: '',
          CurTerm: '',
        },

        modals:{
          modal1: false
        },

        
  
      };
      
    
    },
    methods: {
					getData: function() {
						axios.post('http://127.0.0.1:3000/save',{
							temp: this.model.Temperature,
							weight: this.model.Amount,
							time: this.model.Term
						})
							.then(function(response) {
								console.log(response);
							});
            location.reload();
					}
				},
    created(){ // DB 데이터 로드
          console.log(this.model2);
          let test=axios.get('http://127.0.0.1:3000/set_load').then((res)=>{
            this.model2.CurAmount = 'Current Amount : '+res.data.Amount+' ml'    
            this.model2.CurTemp = 'Current Temp : '+res.data.Temp+' °C'
            this.model2.CurTerm = 'Current Term : '+res.data.Term+' 분'
          })
          console.log(test);
    }

}

</script>

<style></style>
