const data = {
  definition: `Active Recall (Ôn tập chủ động) là phương pháp học trong đó người học cố gắng tự trình bày lại kiến thức bằng trí nhớ của chính mình thay vì chỉ đọc lại tài liệu. Khi não phải "gọi lại" thông tin, các liên kết thần kinh được củng cố mạnh mẽ hơn, giúp ghi nhớ lâu dài và linh hoạt hơn trong việc vận dụng.`,
  benefits: [
    {
      title: 'Củng cố trí nhớ dài hạn',
      description:
        'Quá trình tự truy xuất thông tin buộc não phải kích hoạt lại dấu vết ký ức, từ đó làm dày các liên kết và khiến kiến thức bền vững hơn.'
    },
    {
      title: 'Nhận diện lỗ hổng kiến thức',
      description:
        'Khi trả lời không trôi chảy, bạn biết chính xác phần nào cần xem lại thay vì cảm giác “mình đã đọc rồi nên chắc chắn nhớ”.'
    },
    {
      title: 'Tăng khả năng vận dụng',
      description:
        'Việc luyện tập truy xuất giúp bạn phản hồi nhanh và chính xác trong bài kiểm tra, phỏng vấn hoặc khi giải quyết vấn đề thực tế.'
    }
  ],
  howTo: [
    'Đặt câu hỏi từ nội dung vừa học: ai, cái gì, tại sao, làm thế nào?',
    'Viết hoặc nói lại câu trả lời mà không nhìn tài liệu; ưu tiên dùng từ ngữ của chính bạn.',
    'So sánh với nguồn gốc để kiểm tra sai sót rồi điều chỉnh ghi chú.',
    'Lặp lại vào các mốc thời gian cách quãng (spaced repetition) để kiến thức “ăn sâu”.'
  ],
  tools: [
    {
      title: 'Flashcard chủ động',
      description: 'Tự viết câu hỏi phía trước, câu trả lời phía sau; sử dụng Anki, Mochi hoặc Quizlet.'
    },
    {
      title: 'Mini-quiz sau mỗi chương',
      description: 'Tự tạo câu hỏi trắc nghiệm/ngắn; làm ngay sau khi học để kiểm tra độ hiểu.'
    },
    {
      title: 'Tóm tắt bằng lời',
      description: 'Giải thích lại cho người khác hoặc ghi âm chính mình — gọi là Feynman Technique.'
    }
  ]
};

export default function Page() {
  return (
    <main>
      <header>
        <h1>Active Recall là gì?</h1>
        <p>{data.definition}</p>
      </header>

      <section>
        <h2>Vì sao Active Recall hiệu quả?</h2>
        <div className="grid">
          {data.benefits.map((benefit) => (
            <article key={benefit.title} className="card">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Cách thực hành từng bước</h2>
        <ul>
          {data.howTo.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="callout">
          <strong>Mẹo:</strong> Xen kẽ giữa các chủ đề và đặt thời gian nghỉ ngắn giúp não có “khoảng trống” để củng cố ký ức.
        </div>
      </section>

      <section>
        <h2>Công cụ & Biến thể</h2>
        <div className="grid">
          {data.tools.map((tool) => (
            <article key={tool.title} className="card">
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Kết hợp với các kỹ thuật khác</h2>
        <p>
          Active Recall hoạt động mạnh nhất khi đi cùng <strong>Spaced Repetition</strong> (lặp lại cách quãng) và
          <strong> Pomodoro</strong> (chia thời gian học thành phiên tập trung ngắn). Nhờ vậy, bạn vừa chủ động truy
          xuất kiến thức, vừa tối ưu hoá thời điểm ôn lại để tránh quên lãng.
        </p>
      </section>

      <footer>
        <p>
          Bạn có thể tải miễn phí bộ flashcard và checklist thực hành Active Recall tại{' '}
          <a href="https://learninghowtolearn.org" target="_blank" rel="noreferrer">
            Learning How to Learn
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
