import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'blocked'>('idle');

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    
    const blockedUntilStr = localStorage.getItem('contact_blocked_until');
    if (blockedUntilStr) {
      const blockedUntil = parseInt(blockedUntilStr, 10);
      if (now < blockedUntil) {
        return false;
      } else {
        localStorage.removeItem('contact_blocked_until');
      }
    }

    const timestampsStr = localStorage.getItem('contact_message_timestamps');
    let timestamps: number[] = timestampsStr ? JSON.parse(timestampsStr) : [];
    
    timestamps = timestamps.filter(t => now - t < 60000);
    
    if (timestamps.length >= 10) {
      localStorage.setItem('contact_blocked_until', (now + 24 * 60 * 60 * 1000).toString());
      return false;
    }

    timestamps.push(now);
    localStorage.setItem('contact_message_timestamps', JSON.stringify(timestamps));
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkRateLimit()) {
      setStatus('blocked');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }
    
    setStatus('loading');

    const botToken = '8901809442:AAEtjMU9To_KAuLQwGpfFAktu0ASZ7n7ZFY';
    // IMPORTANT: Replace 'YOUR_CHAT_ID' with your actual Telegram Chat ID
    const chatId = '-5374685766';

    const text = `
📩 *New Message from Portfolio!*
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📝 *Message:*
${formData.message}
`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sokchanear0@gmail.com',
      href: 'mailto:sokchanear0@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '096 588 1722',
      href: 'tel:0965881722',
    },
    {
      icon: Send,
      title: 'Telegram',
      value: '@earsokchan',
      href: 'https://t.me/earsokchan',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Phnom Penh, Cambodia',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-white py-28 px-6 border-t border-black/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Let's collaborate and create something clean and impactful together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Let's work together</h3>
              <p className="text-black/60 text-base leading-relaxed mb-8">
                I'm currently available for freelance projects and full-time opportunities.
                Whether you need a full-stack developer or want to discuss a project idea, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-black/5 bg-black/[0.02] hover:bg-black hover:text-white transition-colors group"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-black text-white group-hover:bg-white group-hover:text-black rounded-lg transition-colors shrink-0">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-black/50 group-hover:text-white/70 uppercase tracking-wider">{info.title}</p>
                    <p className="text-sm font-bold text-black group-hover:text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>


          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-xl text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors text-sm font-medium"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-xl text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors text-sm font-medium"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-xl text-black placeholder-black/30 focus:outline-none focus:border-black transition-colors text-sm font-medium resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'blocked'}
                className="w-full px-8 py-3.5 bg-black text-white rounded-xl font-medium text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-black/80 transition-colors shadow-sm disabled:opacity-70"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to Send' : status === 'blocked' ? 'Spam Detected: Blocked 1 Day' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-28 pt-8 border-t border-black/10 text-center text-xs font-medium text-black/50">
          <p>© 2026 Sokchan. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}