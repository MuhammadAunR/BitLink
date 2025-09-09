import React from 'react'
import { Link, Shield, Zap, Users, Target, Globe } from 'lucide-react'
import UrlLink from 'next/link'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div style={{ backgroundColor: '#2F3061' }} className="text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About BitLink</h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Making your long, messy URLs short, simple, and easy to share.
            Fast, secure, and reliable link shortening at your fingertips.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#343434' }}>
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We believe that sharing links should be effortless. BitLink transforms unwieldy URLs into
              clean, professional links that are perfect for social media, emails, and anywhere you need
              to share content quickly and effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 px-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#343434' }}>
            Why Choose BitLink?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2F3061' }}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#343434' }}>Lightning Fast</h3>
              <p className="text-gray-600">
                Generate shortened links in milliseconds. No waiting, no delays – just instant results.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2F3061' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#343434' }}>Secure & Reliable</h3>
              <p className="text-gray-600">
                Your links are protected with enterprise-grade security and guaranteed 99.9% uptime.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2F3061' }}>
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#343434' }}>Easy to Share</h3>
              <p className="text-gray-600">
                Clean, professional links that work perfectly across all platforms and devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#343434' }}>
              The Story Behind BitLink
            </h2>
            <div className="text-left space-y-6 text-gray-600 leading-relaxed">
              <p>
                Born from frustration with cluttered, unreliable URL shorteners, BitLink was created
                to solve a simple problem: make link sharing effortless and professional.
              </p>
              <p>
                We noticed that most URL shorteners were either too complex, unreliable, or came
                with unnecessary features that got in the way. We wanted something different –
                a tool that focuses on doing one thing exceptionally well.
              </p>
              <p>
                Today, BitLink serves thousands of users who trust us to make their digital
                communication cleaner and more effective. Whether you&apos;re a social media manager,
                content creator, or business owner, we&apos;re here to make your links work better.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-6" style={{ backgroundColor: '#2F3061' }}>
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Simplicity First</h3>
              <p className="text-gray-200">
                We believe the best tools are the ones that get out of your way.
                BitLink is designed to be intuitive and straightforward.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">User-Focused</h3>
              <p className="text-gray-200">
                Every feature we build starts with a simple question:
                &quot;How does this make our users&apos; lives better?&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#343434' }}>
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of users who trust BitLink for their URL shortening needs.
          </p>
          <button

            className="px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#2F3061' }}>
            <UrlLink href='/shorten'>
              Try BitLink Now
            </UrlLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About