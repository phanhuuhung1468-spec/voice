import React from 'react';

const App: React.FC = () => {
  return (
    <main className="bg-slate-100 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 max-w-3xl w-full transform hover:scale-[1.01] transition-transform duration-500 ease-in-out">
        
        <blockquote className="text-center mb-8">
          <p className="text-2xl sm:text-3xl font-bold text-indigo-700 italic">
            “Sao tôi sống hiền mà đời vẫn khổ?”
          </p>
        </blockquote>

        <div className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
          <p>
            <span className="font-bold text-gray-900">Phật dạy,</span> gieo hạt lúa xuống đất,
            đâu phải hôm nay gieo, mai đã có bông.
            Phước cũng vậy,
            phải đủ nắng, đủ mưa, đủ thời gian mới trổ.
          </p>
          
          <p>
            <span className="font-bold text-gray-900">Người sống có Tâm có Đức,</span>
            có thể thiệt thòi một lúc,
            nhưng đó là lúc nhân lành đang bén rễ,
            đợi ngày nở hoa.
          </p>

          <p>
            <span className="font-bold text-gray-900">Ngược lại, người sống gian dối,</span>
            tưởng được nhiều,
            nhưng chỉ là vay nợ nhân quả,
            đến hạn rồi cũng phải trả.
          </p>

          <div className="border-t my-6 border-indigo-100"></div>

          <p>
            <span className="font-bold text-gray-900">Ông Trời – hay là Luật Nhân Quả –</span>
            chưa bao giờ sai.
            Thiện chưa báo, chỉ vì thời gian chưa tới.
            Ác chưa quả, chỉ vì nghiệp còn giấu mình.
          </p>

          <div className="border-t my-6 border-indigo-100"></div>
          
          <p className="font-bold text-indigo-700 text-center text-lg sm:text-xl italic mt-8">
            Nên hôm nay,
            dù ai đối đãi thế nào,
            con vẫn cứ sống thiện,
            vì đó là cách con tạo nên bình an thật sự cho chính mình.
          </p>
        </div>
        
      </div>
    </main>
  );
};

export default App;
