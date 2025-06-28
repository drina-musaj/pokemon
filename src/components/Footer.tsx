import UnderlineLink from '@/components/links/UnderlineLink';


export function Footer() {
  return (
     <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
              Drina Musaj
            </UnderlineLink>
          </footer>
          )
}
